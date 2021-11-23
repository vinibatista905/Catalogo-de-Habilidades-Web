import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { history } from '../../../history';
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
} from "./UpdateProfileFormElements";

const UpdateProfileForm = () => {

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

    // const imageID = profileImage.data.public_id;
    // console.log(imageID);

    const profileData = {
      role: values.role,
      team: values.team,
      startDate: values.startDate,
    
      phone: values.phone,
      linkedin: values.linkedin,
      github: values.github,
      idUser: userId,
    };

    console.log(profileData);
    await axios
      .put(`http://localhost:5000/user/update_profile/${userId}`, profileData)
      .then((resp) => {
        const data = resp.data;
        if (data) {
          console.log(data);
          alert("Perfil Atualizado!");
          history.push("/profile")
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
          initialValues={{
            role: profile.role,
            team: profile.team,
            startDate: profile.startDate,
            phone: profile.phone,
            linkedin: profile.linkedin,
            github: profile.github,

          }} 
      onSubmit={handleSubmit}
      >
        <Form className="form">
          <FieldContainer>
            <FieldWrap>
              <FieldDesc>Cargo*</FieldDesc>
              <Field
                name="role"
                placeholder="Ex: Desenvolvedor Java"
                className="formField"
              />
            </FieldWrap>
            <FieldWrap>
              <FieldDesc>Time*</FieldDesc>
              <Field
                name="team"
                placeholder="Ex: Time Machine Learning"
                type="text"
                className="formField"
              />
            </FieldWrap>
            <FieldWrap>
              <FieldDesc>Data de Início*</FieldDesc>
              <Field name="startDate" type="date" className="formField" />
            </FieldWrap>

            <FieldWrap>
              <FieldDesc>Celular</FieldDesc>
              <Field
                name="phone"
                placeholder="Ex: (11) 12345-6789"
                type="text"
                className="formField"
              />
            </FieldWrap>

            <FieldWrap>
              <FieldDesc>LinkedIn</FieldDesc>
              <Field
                name="linkedin"
                placeholder="Ex: linkedin.com/fulano"
                type="text"
                className="formField"
              />
            </FieldWrap>

            <FieldWrap>
              <FieldDesc>Github</FieldDesc>
              <Field
                name="github"
                placeholder="Ex: github.com/fulano"
                type="text"
                className="formField"
              />
            </FieldWrap>
{/* 
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
                <FormBtn className="upload" type="button" onClick={uploadImage}>
                  Fazer Upload da Imagem
                </FormBtn>
                {loading ? <LoadingSpinner /> : null}
              </BtnWrap>

              <LoadingWrap>
                <span className={imageLoaded ? "loaded-on" : "loaded-off"}>
                  Upload Realizado!
                </span>
              </LoadingWrap>
            </FieldWrap> */}
          </FieldContainer>
          <BtnContainer>
            <SubmitBtn type="submit">Atualizar Perfil</SubmitBtn>
          </BtnContainer>
        </Form>
      </Formik>
      ))}
    </ProjectFormWrap>
  );
};

export default UpdateProfileForm;
