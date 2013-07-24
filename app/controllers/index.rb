get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/' do
  @player1 = Player.find_or_create_by_name(params[:player1])
  @player2 = Player.find_or_create_by_name(params[:player2])

  session[:player1] = @player1.id
  session[:player2] = @player2.id

  # if request.xhr?
  #   content_type :json
  #   @player.to_json
  #   # @player2.to_json
  # end


  redirect '/game'
end

get '/game' do
  player1 = session[:player1]
  player2 = session[:player2]

  game = Game.new
  game.players << Player.find(player1)
  game.players << Player.find(player2)
  game.save!

  @player1 = Player.find(player1)
  @player2 = Player.find(player2)

  session[:game] = game.id  

  erb :game
end

# post '/start' do


#   if request.xhr?
#     content_type :json
#     @player.to_json
#   end
# end

post '/winner' do
  p params
  @game = Game.find(session[:game])

  p @game
  p @game.id
  Game.find(@game.id).update_attributes(winner: params[:stats][:winner], 
                                        time: params[:stats][:time])
end

get '/game/:id' do
  @game = Game.find_by_id(params[:id])
  erb :results
end

