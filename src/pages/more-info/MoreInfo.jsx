import React from "react";
import "./MoreInfo.scss";
import Pencil from "../../assests/pencil.png";

const MoreInfo = () => {
  return (
    <div className="container-moreinfo">
      <div className="heading">
        <h2>More info</h2>
        <img src={Pencil} alt="pen" />
      </div>
      <p className="info-paragraph">
        Apple is an American coroporation that manufactures personal and tablet
        computers, audio players, smartphones, and software. One of the pioneers
        in the fiel...Apple is an American coroporation that manufactures
        personal and tablet computers, audio players, smartphones, and software.
        One of the pioneers in the fiel...Apple is an american corporation that
        manufactures personal and tablet computers, audio players, smartphones,
        and softwar. One of the pioneers in the fiel... Apple is an American
        coroporation that manufactures personal and tablet computers, audio
        players, smartphones, and software. One of the pioneers in the
        fiel...Apple is an American coroporation that manufactures personal and
        tablet computers, audio players, smartphones, and software. One of the
        pioneers in the fiel... Apple is an American coroporation that
        manufactures personal and tablet computers, audio players, smartphones,
        and software. One of the pioneers in the fiel...Apple is an American
        coroporation that manufactures personal and tablet computers, audio
        players, smartphones, and software. One of the pioneers in the fiel...
      </p>
    </div>
  );
};

export default MoreInfo;
