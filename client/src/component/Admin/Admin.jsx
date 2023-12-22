import * as React from "react";
import './Admin.css'
import ListClient from "./ListClient";
import ClientDetails from "./ClientDetails";

const Admin=(props)=> {
  return (
    <>
      <div className="divAdmin">
        <div className="divAdmin2">
          <div className="columnAdmin">
            <div className="divAdmin3">
              <div className="divAdmin4">
                <div className="divAdmin5">
                  <div className="divAdmin6">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ba1ba319e439fc67eb537da94e50530ff26a32623bd3fcc32d4412e3d8dbaba?"
                      className="imgAdmin"
                    />
                    <div className="divAdmin7">Cadena de suministros</div>
                  </div>
                  <div className="divAdmin8">Resumen</div>
                  <div className="divAdmin9">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3789b4da0ff7bbb401a51930e99f1964fd94e4f71c0e259abf6ece542a3cfb2a?"
                      className="imgAdmin"
                    />
                    <div className="divAdmin10">Unidad de negocio</div>
                  </div>
                  <div className="divAdmin11">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/463861501310dc27db182a16aedd158acdfc08475c9e0e7c42a9a515a3b9a852?"
                      className="imgAdmin"
                    />
                    <div className="divAdmin12">Proveedores</div>
                  </div>
                  <div className="divAdmin13">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4b5d1c6d0a24460e2f172944110c8e0bc734b771bdd0386da745b1acc30ee94?"
                      className="imgAdmin"
                    />
                    <div className="divAdmin14">Distribuidores</div>
                  </div>
                  <div className="divAdmin15">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ad67e24eee99acf595ceea4cfa35ee5d01f5d565023cd7b1ba4265fd85ffef3?"
                      className="imgAdmin"
                    />
                    <div className="divAdmin16">Clientes</div>
                  </div>
                  <div className="divAdmin17">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c05468233b11f9536a72cead6cc036c821fb23aaf6166b914842d292dfe5c51?"
                      className="imgAdmin"
                    />
                    <div className="divAdmin18">Historial de operaciones</div>
                  </div>
                  <div className="divAdmin19">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/85ef95a54d33f89a22b913eb3571f1204f8b42cca07f320006d7eee555fa0364?"
                      className="imgAdmin"
                    />
                    <div className="divAdmin20">Empleados</div>
                  </div>
                  <div className="divAdmin21">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/26a48db717bab15ec6fde0b344ef3b48e8fe0f866627a0671eafdfad0b56c7c7?"
                      className="imgAdmin2"
                    />
                    <div className="divAdmin22">
                      Processos
                      <br />
                    </div>
                  </div>
                  <div className="divAdmin23">Cuenta</div>
                  <div className="divAdmin24">Empresa</div>
                </div>
                <div className="divAdmin25">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="imgAdmin3"
                  />
                  <div className="divAdmin26">
                    <div className="divAdmin27">Alexander Briones</div>
                    <div className="divAdmin28">EMTRAFESA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="colAdmin2">
         <ListClient/>
          </div>
          <div className="columnAdmin3">
          <ClientDetails/>
          </div>
        </div>
      </div>

    </>
  );
}


export default Admin