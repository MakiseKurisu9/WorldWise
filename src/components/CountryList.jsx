import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="add your first city by clicking on a city on the map" />
    );

  const country = cities.reduce((arr, cur) => {
    if (!arr.map((el) => el.country).includes(cur.country))
      return [
        ...arr,
        {
          country: cur.country,
          emoji: cur.emoji,
        },
      ];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {country.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
