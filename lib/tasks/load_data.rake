namespace :load_data do
  desc 'Generate items'
  task :items, [:api_key, :locale] => :environment do |t, args|
    Item.destroy_all

    puts 'Load items...'
    url = 'https://ru.api.riotgames.com/lol/static-data/v3/items?tags=all'
    response = load_data(url, args)
    JSON.parse(response.body)['data'].each do |item|
      Item.create(name: item.first, data: item.last)
    end
    puts 'End'
  end

  task :runes, [:api_key, :locale] => :environment do |t, args|
    Rune.destroy_all

    api_key = args[:api_key] || 'RGAPI-517e5bf5-a0e2-4403-b931-1c5ce5afd6d5'
    locale = args[:locale] || 'en_US'

    puts 'Load runes...'
    uri = URI.parse(
      "https://ru.api.riotgames.com/lol/static-data/v3/runes?locale=" \
      "#{locale}&tags=all&api_key=#{api_key}"
    )

    response = Net::HTTP.get_response(uri)
    JSON.parse(response.body)['data'].each do |item|
      Rune.create(name: item.first, data: item.last)
    end
    puts 'End'
  end

  task :masteries, [:api_key, :locale] => :environment do |t, args|
    Mastery.destroy_all

    api_key = args[:api_key] || 'RGAPI-517e5bf5-a0e2-4403-b931-1c5ce5afd6d5'
    locale = args[:locale] || 'en_US'

    puts 'Load masteries...'
    uri = URI.parse(
      "https://ru.api.riotgames.com/lol/static-data/v3/masteries?locale=" \
      "#{locale}&tags=all&api_key=#{api_key}"
    )
    response = Net::HTTP.get_response(uri)
    JSON.parse(response.body)['data'].each do |item|
      Mastery.create(name: item.first, data: item.last)
    end
    puts 'End'
  end

  task :champions, [:api_key, :locale] => :environment do |t, args|
    Champion.destroy_all

    api_key = args[:api_key] || 'RGAPI-517e5bf5-a0e2-4403-b931-1c5ce5afd6d5'
    locale = args[:locale] || 'en_US'

    puts 'Load champions...'
    uri = URI.parse(
      'https://ru.api.riotgames.com/lol/static-data/v3/champions?locale=' \
      "#{locale}&tags=all&dataById=false&api_key=#{api_key}"
    )
    response = Net::HTTP.get_response(uri)
    JSON.parse(response.body)['data'].each do |item|
      Champion.create(name: item.first, data: item.last)
    end
    puts 'End'
  end

  desc "Load all"
  task :all, [:api_key, :locale] => [:items, :masteries, :champions, :runes]
end

def load_data(url, args)
  api_key = args[:api_key] || 'RGAPI-517e5bf5-a0e2-4403-b931-1c5ce5afd6d5'
  locale = args[:locale] || 'en_US'

  uri = URI.parse(url + "&locale=#{locale}&api_key=#{api_key}")
  response = Net::HTTP.get_response(uri)
  if response.message == 'Forbidden' || response.message == 'Unauthorized'
    puts "Response #{response.message} \n"
    puts "Please pass api_tokenn to task - 'rake load_data:all[api_token]'"
  end
  response
end
