import React, { useState } from "react";
import Header from "../Header";
import Modal from "../Modal";

import styles from "./Layout.module.scss";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleCreateJob = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <Header onClick={handleCreateJob} />
      <Modal open={open} onClose={() => setOpen(false)} />
      <main className={styles.root}>{children}</main>
    </div>
  );
};

type LayoutProps = React.PropsWithChildren<{}>;

export default Layout;
