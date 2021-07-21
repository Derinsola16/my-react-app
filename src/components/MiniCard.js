const MiniCard = (prop) => {
  return (
    <div class="d-flex flex-column justify-content-center align-items-center border-bottom py-4 col-md-3 me-5 mb-2 w-100">
      <p class="mb-0">
      {prop.text}
      </p>
      <span class="text-dark fs-3 fw-bold">{prop.number}</span>  
  </div>
  );
};

export default MiniCard;
