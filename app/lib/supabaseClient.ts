import { createClient } from '@supabase/supabase-js'


//後で環境変数に入れる
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);