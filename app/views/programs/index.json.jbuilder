json.array!(@programs) do |program|
  json.extract! program, :id, :name, :desc, :website
  json.url program_url(program, format: :json)
end
