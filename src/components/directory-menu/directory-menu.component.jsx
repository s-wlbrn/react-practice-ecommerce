import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import './directory-menu.styles.scss';

const DirectoryMenu = () => {
  const { sections } = useSelector(
    createStructuredSelector({
      sections: selectDirectorySections,
    })
  );

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );
};

export default DirectoryMenu;
