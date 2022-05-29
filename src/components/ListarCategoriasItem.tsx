import PropTypes from "prop-types";
import { Category } from "../types/category.types";

/**
 * Obter o id da categoria da url de poke api
 * @author Digital House
 * @param {string} url o URL que aponta para uma categoria
 * @return {string} o código da categoria
 */
export const extractCategoriaId = (url: string): string => {
  return url.split("item-category")[1].replace("/", "");
};

interface ListarCategoriasItemProps {
  categoria: Category;
  selecionarCategoria: (categoria: Category) => void;
}

/**
 * Visualiza uma categoria com seu nome e url
 *
 * Ex:
 * <pre>
 *     <ListarCategoriasItem categoria={categoria}
 *                             selecionarCategoria={(categoria) => {}}/>
 *
 * </pre>
 *
 * @author Digital House
 * @param categoria a categoria a ser exibida
 * @param selecionarCategoria uma função que é executada ao clicar na categoria
 */
const ListarCategoriasItem = ({
  categoria,
  selecionarCategoria,
}: ListarCategoriasItemProps) => (
  <div onClick={() => selecionarCategoria(categoria)}>
    <strong>{categoria.name}</strong>
    <small> {categoria.url}</small>
  </div>
);

ListarCategoriasItem.propTypes = {
  categoria: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default ListarCategoriasItem;
