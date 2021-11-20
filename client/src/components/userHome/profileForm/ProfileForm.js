import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import {
  BtnContainer,
  CheckSkillsLink,
  FieldContainer,
  FieldDesc,
  FieldWrap,
  FormBtn,
  ProjectFormWrap,
} from "./ProfileFormElements";

const ProfileForm = () => {
  const [imageSelected, setImageSelected] = useState("");
  const [profileImage, setProfileImage] = useState([]);

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "kgem041l");

    await axios
      .post("https://api.cloudinary.com/v1_1/dudmycscb/image/upload", formData)
      .then((response) => {
        setProfileImage(response);
        console.log(profileImage);
        console.log(profileImage.data.public_id);
      });
  };

  const handleSubmit = async (values) => {
    const userId = localStorage.getItem("user_id");

    const imageID = profileImage.data.public_id;

    const profileData = {
      role: values.role,
      team: values.team,
      startDate: values.startDate,
      profileImage: imageID,
      idUser: userId,
    };

    console.log(profileData);
    await axios
      .post("http://localhost:5000/user/create_profile", profileData)
      .then((resp) => {
        const data = resp.data;
        if (data) {
          console.log(data);
          alert("Perfil Criado!");
        }
      })
      .catch((err) => {
        alert("Perfil já cadastrado!");
      });
  };

  return (
    <ProjectFormWrap>
      <Formik initialValues={{}} onSubmit={handleSubmit}>
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
              <FieldDesc>Data de Ingresso*</FieldDesc>
              <Field name="startDate" type="date" className="formField" />
            </FieldWrap>

            {/* Upload de imagem aqui */}

            <FieldWrap>
              <FieldDesc>Foto de Perfil</FieldDesc>
              <Field
                name="profileImage"
                type="file"
                onChange={(event) => {
                  setImageSelected(event.target.files[0]);
                }}
              />
              <button className='upload' type="button" onClick={uploadImage}>
                Fazer Upload da Imagem
              </button>
            </FieldWrap>
          </FieldContainer>
          <BtnContainer>
            <FormBtn type="submit">Adicionar</FormBtn>
            <CheckSkillsLink href="/admin/all_projects">
              <button type="button" className="linkBtn">
                Visualizar Perfil
              </button>
            </CheckSkillsLink>
          </BtnContainer>
        </Form>
      </Formik>
    </ProjectFormWrap>
  );
};

export default ProfileForm;
