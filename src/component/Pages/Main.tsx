import house from "../../assets/animal-shelter.png"
import classes from "./Main.module.scss";

const Main = () => {
  return (
    <div className={classes['main']}>
      <div className={classes['main__img']}>
        <img src={house} alt="house" />
			</div>
			<div className={classes['main__text']}>
				<p>반려동물 소개앱입니다.</p>
				<p>나의 반려동물을 추가하여 자랑해보세요!</p>
			</div>
    </div>
  );
};

export default Main;
