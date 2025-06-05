import { createClient } from '@supabase/supabase-js'


//後で環境変数に入れる
const supabaseUrl = '';
const supabaseAnonKey = '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);