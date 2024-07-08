const { default: Inicio } = require("pages/Inicio");
const { BrowserRouter, Routes } = require("react-router-dom");

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
