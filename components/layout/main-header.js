import Link from 'next/link';
import React from 'react';
import Button from '../ui/button';

import classes from './main-header.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>NextEvents</Link>
      </div>
      <div>
        <Button link='https://www.lucasbecker.dev'>
          Back to LucasBecker.dev
        </Button>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href='/events'>Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
