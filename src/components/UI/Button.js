const Button = ({ title, isDisabled }) => {
  let className = "btn w-100 mt";
    if (isDisabled)
        className+=" disabled";

    return (
    <button className={className} disabled={isDisabled}>
      {title}
    </button>
  )
}

export default Button
