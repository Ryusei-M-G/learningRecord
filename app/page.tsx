import Title from "./title";
import Button from "./button";
import MainRecord from "./mainRecord";
import { supabase } from "./lib/supabaseClient";

export default async function Home() {
  // const { data, error } = await supabase.from('test').select('*')

  // console.log('Server data:', data)
  // console.log('Server error:', error)


  return (
    <div>
      <Title />
      <Button />
      <MainRecord />
    </div>
  );
}
