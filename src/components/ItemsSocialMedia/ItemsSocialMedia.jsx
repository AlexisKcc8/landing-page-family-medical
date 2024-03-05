import { dataSocialsMedia } from "@data/socialMedia";

export const ItemsSocialMedia = (props) => {
  let { onlyTheseIcons } = props;
  //si la propiedad viene vacia o de plano no viene, le asignamos un array vacio y renderizara todos los iconos, en caso contrario respetara
  onlyTheseIcons = onlyTheseIcons === undefined ? [] : onlyTheseIcons;
  return (
    <>
      {dataSocialsMedia ? (
        onlyTheseIcons.length > 0 ? (
          dataSocialsMedia.map((icon) =>
            [...onlyTheseIcons].includes(icon.title) ? (
              <li className="" key={icon.id} style={{ listStyle: "none" }}>
                <a href={icon.url} target="_black">
                  <img
                    style={{ width: "2rem", height: "2rem" }}
                    src={icon.icon}
                    alt={`icono-${icon.title}`}
                  />
                </a>
              </li>
            ) : null
          )
        ) : (
          dataSocialsMedia.map((icon) => (
            <li key={icon.id}>
              <a href={icon.url} target="_black">
                <img
                  style={{ width: "2rem", height: "2rem" }}
                  src={icon.icon}
                  alt={`icono-${icon.title}`}
                />
              </a>
            </li>
          ))
        )
      ) : (
        <h6>redes sociales no encontradas</h6>
      )}
    </>
  );
};
