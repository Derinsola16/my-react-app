const Card = (prop) => {
  return (
    <div class="card p-3 rounded-3 me-lg-5 col-lg-6 col-md-12 size" >
    <div>
      <p class="mb-0">
      {prop.text}
      </p>
      <span class="text-dark fs-3 fw-bold">{prop.number}</span>
    </div>
    {/* style={{width: "21%"}} */}
  </div>
  );
};

export default Card;
