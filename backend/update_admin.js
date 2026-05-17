require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcrypt');

const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function update() {
  const hash = await bcrypt.hash('admin123', 10);
  const { data, error } = await sb.from('admin').update({ password: hash }).eq('email', 'admin@eventify.com');
  console.log('Update result:', { data, error });
}

update();
