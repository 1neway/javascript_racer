class Game < ActiveRecord::Base
  # Remember to create a migration!
  has_many :players, through: :game_players
  has_many :game_players
end
