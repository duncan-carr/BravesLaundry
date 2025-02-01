import { SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL } from '$env/static/private'
import { createClient } from '@supabase/supabase-js'
import { type Database } from './databaseTypes'

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
