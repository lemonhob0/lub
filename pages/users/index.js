import Style from "styles/users/users.module.scss";
import UsersList from "components/users/userslist";
import AddUsers from "components/users/addusers";

export default function Users() {
  return (
    <section className={Style.users}>
      <div className={Style.addusers}>
        <AddUsers />
      </div>
      <div className={Style.userslist}>
        <UsersList />
      </div>
    </section>
  );
}
