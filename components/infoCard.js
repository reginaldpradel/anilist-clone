import GenreEllipse from "./genreEllipse";

const toWord = (word) => {
  let lowercase = word.toLowerCase();
  lowercase[0] = lowercase[0].toUpperCase;
  return lowercase;
};

const InfoCard = ({
  rank,
  image,
  title,
  genres,
  score,
  users,
  type,
  episodes,
  releaseDate,
  status,
  color,
  id,
}) => (
  <>
    <div className="info-card">
      <div className="info-card__rank">
        <h2>
          <span>#</span>
          {rank}
        </h2>
      </div>
      <div className="info-card__content">
        <div className="info-card__content__left">
          <img className="info-card__content__left__image" src={image} />
          <div className="info-card__content__left__section">
            <h3>{title}</h3>
            <div className="info-card__content__left__section__genre">
              {genres.map((genre, i) => (
                <GenreEllipse key={id + i} text={genre} color={color} />
              ))}
            </div>
          </div>
        </div>
        <div className="info-card__content__right">
          <img src="/images/smiley.svg" />
          <div>
            <h4>{score}%</h4>
            <p>{users} users</p>
          </div>
          <div>
            <h4>{type === "TV" ? `${type} Show` : type.toLowerCase()}</h4>
            <p>{episodes} episodes</p>
          </div>
          <div>
            <h4>{releaseDate.toLowerCase()}</h4>
            <p>{status.toLowerCase()}</p>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .info-card {
        display: grid;
        grid-template-columns: 0.55fr 9.45fr;
        height: 5rem;
        box-sizing: border-box;
        padding: 0 1.5rem 0 2.2rem;
        margin: 0.5rem 0 2rem 0;
      }

      .info-card__content {
        display: flex;
        background-color: white;
        box-sizing: border-box;
        border-radius: 0.2rem;
        justify-content: space-between;
      }

      .info-card__rank {
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgb(100, 115, 128);
        font-weight: 900;
      }

      .info-card__rank h2 {
        font-size: 1.6rem;
        margin-right: 1.35rem;
        margin-top: 1.5rem;
      }

      .info-card__rank span {
        font-size: 1.25rem;
        color: rgba(100, 115, 128, 0.7);
      }

      .info-card__content__left {
        display: flex;
      }

      .info-card__content__left__image {
        height: 3.8rem;
        width: 3rem;
        margin: auto 0 auto 0.6rem;
        border-radius: 0.1rem;
      }

      .info-card__content__left h3 {
        margin: 0 0 0 1rem;
      }

      .info-card__content__left__section {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .info-card__content__left__section h3 {
        font-size: 1rem;
        font-weight: 600;
        color: #26343f;
      }

      .info-card__content__left__section__genre {
        display: flex;
        margin-top: 0.3rem;
        margin-left: 1rem;
      }

      .info-card__content__right {
        display: grid;
        grid-template-columns: 1fr 6fr 6fr 6fr;
        margin-right: 2rem;
      }

      .info-card__content__right p {
        margin: 0;
        font-size: 0.8rem;
        color: #647380;
        font-weight: 600;
        text-transform: capitalize;
      }

      .info-card__content__right h4 {
        margin: 0;
        color: #404e5c;
        text-transform: capitalize;
      }

      .info-card__content__right div {
        padding-top: 1.45rem;
        padding-left: 0.3rem;
      }

      .info-card__content__right img {
        height: 1.2rem;
        margin-top: 1.5rem;
        margin-right: 0.3rem;
      }
    `}</style>
  </>
);

export default InfoCard;
