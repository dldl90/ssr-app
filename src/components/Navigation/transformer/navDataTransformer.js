import { flatten, map, pathOr, pipe } from 'ramda';
import colors from '@noths/styles-config/src/colors';

const formatSubitems = items => {
    return map(item => {
      const title = pathOr('', ['title'])(item);
      const url = item.include_link ? pathOr('', ['url'])(item) : null;
      const subItems = pathOr([], ['links'])(item);
      return {
        id: title,
        title,
        url,
        subItems,
      };
    })(items);
  };

  const flattenColumnSections = columns => {
    return pipe(
      flatten,
      formatSubitems
    )(columns);
  };

const navDataTransformer = ({ navData, isMobile }) => {
    return pipe(
        pathOr([], ['navigation_categories']),
        map(navItem => {
        const category = pathOr(null, ['category'])(navItem);
        const title = pathOr('', ['title'])(category);
        const url = pathOr(null, ['url'])(category);
        const departmentColor = pathOr(null, ['department_color'])(category);
        const titleColor = pathOr(null, ['title_color'])(departmentColor);

        return {
            id: title,
            title,
            url,
            titleColor: titleColor !== '' ? titleColor : colors.emperor,
            subItems: pipe(
            pathOr([], ['columns']),
            map(pathOr([], ['column_sections'])),
            columns => isMobile ? flattenColumnSections(columns) : map(formatSubitems)(columns)
            )(category),
        };
        }),
        flattenedNavItems => {
        return isMobile ? [flattenedNavItems] : flattenedNavItems;
        }
    )(navData);
};

export default navDataTransformer;
