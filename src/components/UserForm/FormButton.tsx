const FormButton = ({ loading, handler, defaultLabel, loadingLabel }) => {
  return (
    <button disabled={loading} className="btn-yellow" onClick={handler}>
      {loading ? loadingLabel : defaultLabel}
    </button>
  );
};

export default FormButton;
