import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lttjxuymjjzyxtivstgp.supabase.co';
const supabaseKey = 'sb_publishable_9yFjGSKaRnJ4xMsRRYOTdA_ztNzINCY';

export const supabase = createClient(supabaseUrl, supabaseKey);
