select
    DATE_TRUNC(
        {granularity: String},
        rc.date
    ) as granularity_bucket,
    runner_type,
    sum(rc.duration) as total_duration
from
    misc.runner_cost rc final
where
    rc.date > {startTime: DateTime64(9)}
    and rc.date < {stopTime: DateTime64(9)}
    and rc.duration > 0
    and rc.group_repo in {selectedRepos: Array(String)}
    and rc.gpu in {selectedGPU: Array(UInt8)}
    and rc.os in {selectedPlatforms: Array(String)}
    and rc.provider in {selectedProviders: Array(String)}
group by
    granularity_bucket,
    runner_type
order by
    granularity_bucket asc

