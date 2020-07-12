import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

function ProfilePage() {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Luís Felipe</h1>
        <h2>@thisluis</h2>

        <p>Developer sei lá</p>

        <ul>
          <li>
            <LocationIcon />
            Sapucaí-City
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 25 de abril de 2003
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>105 </strong>
          </span>
          <span>
            <strong>76</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;
