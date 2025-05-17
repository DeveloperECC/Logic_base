// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hbayvsxygjllzucrilue.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhiYXl2c3h5Z2psbHp1Y3JpbHVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0Mzg1MjUsImV4cCI6MjA2MzAxNDUyNX0.9d9F46H05AVyiHeqSR89S9WB8Tt4m2wcz_pHCMOqggk';
export const supabase = createClient(supabaseUrl, supabaseKey);