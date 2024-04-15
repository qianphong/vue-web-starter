import OSS from 'ali-oss'

const config = {
  region: 'oss-cn-hangzhou',
  bucket: 'xxxxxxx',
  accessKeyId: 'xxxx',
  accessKeySecret: 'xxxxx',
  chunkSize: 1024 * 1024 * 50,
  basePath: 'xassets', //上传图片的根目录
  secure: true,
}
const origin = `https://${config.bucket}.${config.region}.aliyuncs.com/`

const client = new OSS(config)

/**
 * 文件列表上传
 * @param {*} fileList 文件列表
 */
export function uploadFiles(fileList: Blob[]) {
  const promises = fileList.map(async file => {
    return uploadFile(file)
  })
  return Promise.all(promises)
}
/**
 * 单个文件上传
 */
export async function uploadFile(file: Blob) {
  const ossKey = generateOssKey(file)
  const uploadOptions: OSS.MultipartUploadOptions = {
    headers: {
      // 设置公共读
      'x-oss-object-acl': 'public-read',
    },
  }
  const { chunkSize } = config
  //如果文件大于chunkSize，则采用分片上传
  if (file.size > chunkSize) {
    uploadOptions.parallel = Math.ceil(file.size / chunkSize)
    uploadOptions.partSize = chunkSize
  }
  const result = await client.multipartUpload(ossKey, file, uploadOptions)
  return origin + result.name
}

function generateOssKey(file: any) {
  // 根据文件类型分别放在图片、视频、file文件夹
  const folder = 'img'
  return `${config.basePath}/${folder}/${
    file.uid ? file.uid : new Date().getTime()
  }-${file.name}`
}

export function getUrl(path: string, { compressed }: any = {}) {
  if (path && path != 'null' && path != 'undefined') {
    if (/http[s]{0,1}:\/\/([\w.]+\/?)\S*/.test(path)) {
      return path
    } else {
      if (compressed) {
        return client.signatureUrl(path, {
          process: 'image/resize,w_200,h_200',
        })
      } else {
        return client.signatureUrl(path)
      }
    }
  } else {
    return path
  }
}
