import PreviewCardGrid from "../previewCardGrid";
import CharacterCardGrid from "../characterCardGrid";
import DataDistribution from "./dataDistribution";
import ScoreDistribution from "./scoreDistribution";
import Recommendations from "./recommendations";
import CommunityReviewsAndThreads from "./communityReviewsAndThreads";

const Overview = ({
  relations,
  characters,
  staff,
  stats,
  streamingEpisodes,
  recommendations,
  trailer,
  reviews,
}) => (
  <>
    <div className="overview">
      <h2>Relations</h2>
      <PreviewCardGrid relations={relations} />
      <h2> Characters </h2>
      <CharacterCardGrid characters={characters} />
      <h2>Staff</h2>
      <CharacterCardGrid staff={staff} />
      <div className="overview__data-distribution">
        <div>
          <h2>Status Distribution</h2>
          <DataDistribution distribution={stats.statusDistribution} />
        </div>
        {stats.scoreDistribution && stats.scoreDistribution.length === 10 && (
          <div>
            <h2>Score Distribution</h2>
            <ScoreDistribution distribution={stats.scoreDistribution} />
          </div>
        )}
      </div>
      {streamingEpisodes && (
        <React.Fragment>
          <h2>Watch</h2>
          <div className="overview__streaming-episodes">
            {streamingEpisodes &&
              streamingEpisodes.map(
                (episode, i) =>
                  i < 4 && (
                    <div
                      key={episode.title}
                      onClick={() => window.open(episode.url, "_blank")}
                      className="overview__streaming-episodes__container"
                      style={{
                        backgroundImage: `url(${episode.thumbnail})`,
                      }}
                    >
                      <div>
                        <p>{episode.title}</p>
                      </div>
                    </div>
                  )
              )}
          </div>
        </React.Fragment>
      )}
      {trailer && (
        <React.Fragment>
          <h2>Trailer</h2>
          <iframe
            className="overview__trailer"
            src={`https://www.${trailer.site}.com/embed/${trailer.id}`}
          ></iframe>
        </React.Fragment>
      )}
      <Recommendations recommendations={recommendations.edges} />
      <CommunityReviewsAndThreads reviews={reviews} />
    </div>
    <style jsx>{`
      .overview {
        width: 100%;
        display: flex;
        flex-direction: column;
      }

      h2 {
        font-size: 0.95rem;
        font-weight: 600;
        color: rgb(92, 114, 138);
        margin: 0 0 0.5rem 0;
        font-smooth: antialiased;
      }

      .overview__data-distribution {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1rem;
      }

      .overview__streaming-episodes {
        display: grid;
        grid-template-columns: ${streamingEpisodes.length <= 2
          ? "1fr 1fr"
          : streamingEpisodes.length === 3
          ? "1fr 1fr 1fr"
          : "1fr 1fr 1fr 1fr"};
        grid-column-gap: 2rem;
        margin-bottom: 1rem;
      }

      .overview__streaming-episodes__container {
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 6.25rem;
        border-radius: 0.2rem;
        display: flex;
        align-items: flex-end;
      }

      .overview__streaming-episodes__container div {
        width: 100%;
        height: 2rem;
        background-color: rgba(31, 38, 49, 0.7);
        display: flex;
        align-items: center;
        padding-left: 0.5rem;
        padding-top: 0.1rem;
      }

      .overview__streaming-episodes__container div p {
        color: rgba(237, 241, 245, 0.91);
        font-weight: 400;
        font-size: 0.85rem;
      }

      .overview__trailer {
        height: 14.4rem;
        width: 32.6rem;
        border: none;
        border-radius: 0.2rem;
      }
    `}</style>
  </>
);

export default Overview;
