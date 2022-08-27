import { NFTStorage, File } from "nft.storage"
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

const API_KEY = process.env.NFT_STORAGE_API_KEY

export async function storeAsset(fromParam) {
   const client = new NFTStorage({ token: API_KEY })
   const metadata = await client.store({
       name: fromParam.name,
       description: fromParam.description,       
       image: new File(
           [await fs.promises.readFile(fromParam.image)],           
           { type: 'image/png' }
       ),
   })
   console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url)
   return metadata.url;
}
