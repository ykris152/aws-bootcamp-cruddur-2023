import './ProfileHeading.css';
import EditProfileButton from '../components/EditProfileButton';

export default function ProfileHeading(props) {
    const backgroundImage = 'url("/")';
    const styles = {
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

  return (
    <div className='profile_heading'>
        <div className='title'>{props.profile.display_name}</div>
        <div className="cruds_count">{props.profile.cruds_count}Cruds</div>
        <div className="banner" styles={styles}>
            <div className="avatar">
                <img src="https://assets.thebanana.click/avatars/20230121_190025.jpg"></img>
            </div>
        </div>
        <div className="display_name">{props.display_name}</div>
        <div className="handle">@{props.handle}</div>
        <EditProfileButton setPopped={props.setPopped}></EditProfileButton>
    </div>
  );
}