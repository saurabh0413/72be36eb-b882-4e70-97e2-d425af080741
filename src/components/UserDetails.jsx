// import module.css here;
// import "./userDetails.module.css"
import styles from "./userDetails.module.css";
const UserDetails = (props) => {
  return (
    <>
      <div data-testid="user-container" className={styles.mainDiv}>
        {/* user image */}
        <img className={styles.imgSize} src={props.item.avatar} alt="" />
        <div>
          <div>
            <h3 data-testid="user-fname">{props.item.first_name}</h3>
            <h3 data-testid="user-lname">{props.item.last_name}</h3>
          </div>
          <div>
            <p data-testid="user-address">{props.item.address}</p>
          </div>
        </div>
        <div>
          <h3 data-testid="user-karma">{props.item.karma}</h3>
          <p>karma</p>
        </div>
        <div>
          <h3 data-testid="user-followers">{props.item.followers}</h3>
          <p>followers</p>
        </div>
        <div>
          <h3 data-testid="user-posts">{props.item.posts}</h3>
          <p>posts</p>
        </div>
        <button data-testid="follow-btn">
          {props.item.is_following ? "Unfollow" : "Follow"}
        </button>
      </div>
    </>
  );
};
export default UserDetails;
