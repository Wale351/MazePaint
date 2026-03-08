module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    supabaseUrl: process.env.MAZE_PAINT_SUPABASE_URL || '',
    supabaseAnonKey: process.env.MAZE_PAINT_SUPABASE_ANON_KEY || ''
  });
};
