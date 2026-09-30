function Card({ Pizza }) {
  const { Name, Price, Tags, Avatar } = Pizza

  return (
    <article className="pizza-card">
      <div className="pizza-card__image-wrap">
        <img className="pizza-card__image" src={Avatar} alt={Name} />
        <span className="pizza-card__badge">Pizza</span>
      </div>
      <div className="pizza-card__content">
        <div className="pizza-card__heading">
          <h2>{Name}</h2>
          <p className="pizza-card__price">{Price.toLocaleString('vi-VN')} VND</p>
        </div>
        <div className="pizza-card__tags">
          {Tags.map((tag) => (
            <span className="pizza-card__tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default Card
