import { createClient } from "@supabase/supabase-js";

const subabaseurl = import.meta.env.VITE_SUPAURL;
const subabasekey = import.meta.env.VITE_SUPAKEY;

export const supabase = createClient(subabaseurl,subabasekey);
