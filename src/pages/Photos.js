import { useContext } from "react";

import { Context } from "../Context";
import Image from "../components/Image";
import { getClass } from "../utils";

const Photos = () => {
    const { allPhotos } = useContext(Context);
    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ));

    return (
        <main className="photos">
            {imageElements}
        </main>
    );
};

export default Photos;
