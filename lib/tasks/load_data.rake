namespace :load_data do
  desc 'Generate items'
  task :items => :environment do
    Item.destroy_all

    puts 'Load items...'
    uri = URI.parse("http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/item.json")
    response = Net::HTTP.get_response(uri)
    JSON.parse(response.body)['data'].each do |item|
      Item.create(name: item.first, data: item.last)
    end
    puts 'End'
  end

  task :runes => :environment do
    Rune.destroy_all

    puts 'Load runes...'
    uri = URI.parse("http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/rune.json")
    response = Net::HTTP.get_response(uri)
    JSON.parse(response.body)['data'].each do |item|
      Rune.create(name: item.first, data: item.last)
    end
    puts 'End'
  end

  task :masteries => :environment do
    Mastery.destroy_all

    puts 'Load masteries...'
    uri = URI.parse("http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/mastery.json")
    response = Net::HTTP.get_response(uri)
    JSON.parse(response.body)['data'].each do |item|
      Mastery.create(name: item.first, data: item.last)
    end
    puts 'End'
  end

  task :champions => :environment do
    Champion.destroy_all

    puts 'Load champions...'
    uri = URI.parse("http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json")
    response = Net::HTTP.get_response(uri)
    JSON.parse(response.body)['data'].each do |item|
      Champion.create(name: item.first, data: item.last)
    end
    puts 'End'
  end

  desc "Load all"
  task :all => [:items, :masteries, :champions, :runes]
end
