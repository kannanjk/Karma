import { S3Client, PutObjectCommand,DeleteObjectCommand,GetObjectCommand } from "@aws-sdk/client-s3";
import { generateFileName } from "./generateFilename";
 
const region = process.env.REGION_KEY_ID!;
const accessKeyId = process.env.ACCESS_KEY_ID!;
const secretAccessKey = process.env.PRIVATE_ACCESS_KEY_ID!;
const bucketName = process.env.BUCKET_NAME!;

const s3Client = new S3Client({
  region,   
  credentials: {
    accessKeyId,
    secretAccessKey, 
  },
});   

export const uploadImageToBucket = async (
  fileBuffer_code: any, 
  fileType: any
) => {
  const fileName = generateFileName(); 
  const uploadParams: {
    Bucket: string;
    Body: any;
    Key: string;
    ContentType: any;
  } = {
    Bucket: bucketName,
    Body: fileBuffer_code,
    Key: fileName,
    ContentType: fileType,
  };
  console.log(uploadParams);
  

  const data = await s3Client.send(new PutObjectCommand(uploadParams));
  return { data, fileName };
};


export const deleteImageFromBucket = async (key: string) => {
  const deleteParams = {
    Bucket: bucketName,
    Key: key,
  };

  const data = await s3Client.send(new DeleteObjectCommand(deleteParams));
  return data;
};

export const downloadFileFromBucket = async (key: string) => {
  
  const downloadParams = { Bucket: bucketName, Key: key };
  let x = await s3Client.send(new GetObjectCommand(downloadParams));

  return x.Body?.transformToString();
};
