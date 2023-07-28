import './ProfileAvatar.css';

export default function ProfileAvatar(props) {
    const backgroundImage = `url("https://assets.thebanana.click/avatars/20230121_190025.jpg")`; 
    // ${props.id}
    const styles = {
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };

    return (
        <div className="profile-avatar"
        style={styles}
        ></div>
    );
}