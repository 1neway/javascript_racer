class Player < ActiveRecord::Base
  # Remember to create a migration!
  has_many :games, through: :game_players
  has_many :game_players

end
