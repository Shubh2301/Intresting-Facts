import countryFacts from "../api/countryData.json"

export const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Intresting Facts
      </h2>
      <div className="gradient-cards">

        {
          countryFacts.map((curElem) => {
            const {id,countryName,capital,population,interestingFact}=curElem;
            return(
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">
                 {countryName}
                </p>
                <p>
                  <span className="card-description">Captial:{capital}</span>
                  14525485
                </p>
                <p>
                  <span className="card-description">Population:{population}</span>
                  Delhi
                </p>
                <p>
                  <span className="card-description">IntrestingFacts:{interestingFact}</span>
                  We Love India
                </p>
              </div>
            </div>
            )
          })
        }





      </div>

    </section>
  )
}
