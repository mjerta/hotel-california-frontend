import "./ProfileDetails.css"
import NonActiveForm from "../../forms/non-active-form/NonActiveForm.jsx";
import FormGroup from "../../forms/form-elements/form-group/FormGroup.jsx";
import {useContext} from "react";
import {AuthContext} from "../../../context/AuthenticationProvider.jsx";
import profileImage from "../../../assets/profile-sidebar-image.svg"

function ProfileDetails({className}) {
  const {profileData} = useContext(AuthContext);

  return (
    <div className={`profile-details ${className ? className : ""}`}>
      <NonActiveForm>
        <img src={profileImage} alt="profile image"/>
        <FormGroup
          type={"text"}
          name={"firstName"}
          defaultValue={profileData.firstName}
          labelText={"First name:"}
          className={"form-group-profile-variant"}
          disabled={true}
        />
        <FormGroup
          type={"text"}
          name={"lastName"}
          defaultValue={profileData.lastName}
          labelText={"Last name:"}
          className={"form-group-profile-variant"}
          disabled={true}
        />
        <FormGroup
          type={"text"}
          name={"phoneNumber"}
          defaultValue={profileData.phoneNumber}
          labelText={"Telephone number:"}
          className={"form-group-profile-variant"}
          disabled={true}
        />
        <FormGroup
          type={"text"}
          name={"address"}
          defaultValue={profileData.address}
          labelText={"Address:"}
          className={"form-group-profile-variant"}
          disabled={true}
        />
      </NonActiveForm>
    </div>

  )
}

export default ProfileDetails;