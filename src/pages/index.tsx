import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import { UserInformation } from "ui/components/data-display/UserInformation/UserInformation";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <UserInformation
        picture="http://github.com/saviorocha.png"
        name="Sávio"
        rating={4}
        description="Distrito Federal"
      />
    </div>
  );
}
