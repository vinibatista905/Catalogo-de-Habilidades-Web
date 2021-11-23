import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { Image } from "cloudinary-react";
import axios from "axios";
import {
  BtnContainer,
  BtnWrap,
  FieldContainer,
  FieldDesc,
  FieldWrap,
  FormBtn,
  LoadingSpinner,
  LoadingWrap,
  ProjectFormWrap,
  SubmitBtn,
} from "./UpdateImageElements";

const UpdateImage = () => {
  const userId = localStorage.getItem("user_id");
  const [userProfile, setUserProfile] = useState([]);

  //PEGAR OS DADOS DO PERFIL PARA MOSTRAR NOS CAMPOS DO FORMULÁRIO INICIALMENTE
  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/check_profile/${userId}`)
      .then(({ data }) => {
        setUserProfile(data);
        console.log(data);

        // eslint-disable-next-line
      });
  }, []);

  //UPLOAD DA IMAGEM NO CLOUDINARY
  const [imageSelected, setImageSelected] = useState("");
  const [profileImage, setProfileImage] = useState([]);

  const uploadImage = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "kgem041l");

    await axios
      .post("https://api.cloudinary.com/v1_1/dudmycscb/image/upload", formData)
      .then((response) => {
        setProfileImage(response);
        setLoading(false);
        setImageLoaded(true);
      });
  };

  //LOADING DA IMAGEM
  const [loading, setLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  //ATUALIZAÇÃO DO PERFIL
  const handleSubmit = async (values) => {
    const userId = localStorage.getItem("user_id");

    const imageID = profileImage.data.public_id;
    console.log(imageID);

    const profileData = {
      profileImage: imageID,
      idUser: userId,
    };

    console.log(profileData);
    await axios
      .put(`http://localhost:5000/user/update_profile/${userId}`, profileData)
      .then((resp) => {
        const data = resp.data;
        if (data) {
          console.log(data);
          alert("Imagem Atualizada!");
          window.location.reload(false);
          
        }
      })
      .catch((err) => {
        alert("Falha em atualizar perfil. Tente novamente");
        console.log(err);
      });
  };

  return (
    <ProjectFormWrap>
      {userProfile?.map((profile) => (
        <Formik
          key={profile.id}
          initialValues={{}}
          onSubmit={handleSubmit}
        >
          <Form className="form">
            <FieldContainer>
              <Image
                key={profile.id}
                className="userImg"
                cloudName="dudmycscb"
                publicId={`https://res.cloudinary.com/dudmycscb/image/upload/v1637432647/${profile.profileImage}.jpg`}
              />

              <FieldWrap>
                <FieldDesc>Foto de Perfil</FieldDesc>
                <Field
                  name="profileImage"
                  type="file"
                  onChange={(event) => {
                    setImageSelected(event.target.files[0]);
                  }}
                />
                <BtnWrap>
                  <FormBtn
                    className="upload"
                    type="button"
                    onClick={uploadImage}
                  >
                    Fazer Upload da Imagem
                  </FormBtn>
                  {loading ? <LoadingSpinner /> : null}
                </BtnWrap>

                <LoadingWrap>
                  <span className={imageLoaded ? "loaded-on" : "loaded-off"}>
                    Upload Realizado!
                  </span>
                </LoadingWrap>
              </FieldWrap>
            </FieldContainer>
            <BtnContainer>
              <SubmitBtn type="submit">Atualizar Imagem</SubmitBtn>
            </BtnContainer>
          </Form>
        </Formik>
      ))}
    </ProjectFormWrap>
  );
};

export default UpdateImage;
