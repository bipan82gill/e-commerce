import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img  className="home__image" src="https://t4.ftcdn.net/jpg/03/08/35/27/240_F_308352773_HhRgXeuYclHCKwsxcP9D82MDv98jKEWR.jpg" alt="product"/>
                <div className="home__row">
                    <Product 
                    id="101"
                    title="
                    Farberware Classic FMO11AHTBKN 1.1 Cubic Foot 1000-Watt Microwave Oven, Metallic Red"
                    price={167.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/81ELY7B-xwL._AC_SL1500_.jpg"
                
                />
                    <Product 
                    id="102"
                    title="Apple Watch Series 3, GPS, 38mm, Space Grey Aluminium Case with Black Sport Band"
                    price={209.99}
                    rating={5}
                    image="https://cdn.shopify.com/s/files/1/0036/4806/1509/products/m007155459.jpg?v=1584136638"
                
                />
                   
                    
                      {/* product */}
                </div>
                <div className="home__row">
                <Product 
                    id="103"
                    title="SAMSUNG GALAXY A71"
                    price={99.99}
                    rating={5}
                    image="https://www.virginmobile.ca/assets/phones/10-20826/10-20826_phoneFront.png"
                
                />
                      <Product 
                    id="104"
                    title="Microsoft Surface Laptop (Certified Refurbished) - Intel Core i7 / 256GB SSD / 8GB RAM - Cobalt Blue"
                    price={1199.99}
                    rating={4}
                    image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4t53d?ver=e55b&q=90&m=6&h=663&w=998&b=%23FFFFFFFF&l=f&o=t&aim=true"
                
                />
                <Product 
                    id="105"
                    title="Capresso Ultima Pro"
                    price={346.99}
                    rating={3}
                    image="https://www.faema.ca/v/vspfiles/photos/C01-12401-2T.jpg?v-cache=1460532654"
                
                />
                </div>
                <div className="home__row">
                <Product 
                    id="104"
                    title="65 2020 TU8000 Smart 4K UHD TV"
                    price={1200}
                    rating={4}
                    image="https://images.samsung.com/is/image/samsung/ca-uhd-tu8000-un65tu8000fxzc-frontblack-214919244?$PD_GALLERY_L_JPG$"
                
                />
                     
                </div>

            </div>

        </div>
    )
}

export default Home