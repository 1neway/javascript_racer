class CreateGamePlayers < ActiveRecord::Migration
  def change
    create_table :game_players do |t|
      t.integer :player_id
      t.integer :game_id

      t.timestamps
    end
    add_index(:game_players, [:player_id, :game_id], :unique => true, :name => 'unique_names')
  end
end

