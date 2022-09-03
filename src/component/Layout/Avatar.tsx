import classes from "./Avatar.module.scss";

interface avatarProps {
  src: string;
  alt: string;
}

const Avatar = (props: avatarProps) => {
  return (
    <div className={classes.avatar}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default Avatar;
