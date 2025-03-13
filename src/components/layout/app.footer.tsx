const AppFooter = () => {
  return (
    <div className="text-center my-3">
      Copyright © {new Date().getFullYear()} Tan Nhi dev Made with{" "}
      <span
        style={{
          color: "#e25555",
        }}
      >
        ♥
      </span>{" "}
      in VietNam
    </div>
  );
};

export default AppFooter;
